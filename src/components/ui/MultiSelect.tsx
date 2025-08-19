"use client";

import React, { useMemo, useState, useRef, useEffect, forwardRef } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

type Value = number | string;
type Option = { label: string; value: Value };

type MultiSelectProps = {
  options: Option[];
  value: Value[];
  onChange: (next: Value[]) => void;
  placeholder?: string;
  className?: string;
  searchable?: boolean;
};

/**
 * MultiSelect with forwarded ref:
 * - The ref is attached to the trigger <button>, which is focusable.
 * - RHF can now auto-focus this field when invalid via field.ref.
 */
const MultiSelect = forwardRef<HTMLButtonElement, MultiSelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Select...",
      className = "",
      searchable = true,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const rootRef = useRef<HTMLDivElement>(null);

    // Close on outside click / Escape
    useEffect(() => {
      if (!open) return;

      const onPointerDown = (e: PointerEvent) => {
        if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };

      document.addEventListener("pointerdown", onPointerDown);
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown);
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [open]);

    const filtered = useMemo(() => {
      if (!searchable || !query.trim()) return options;
      const q = query.toLowerCase();
      return options.filter((o) => o.label.toLowerCase().includes(q));
    }, [options, query, searchable]);

    const toggle = (v: Value) => {
      const set = new Set(value);
      set.has(v) ? set.delete(v) : set.add(v);
      onChange([...set]);
    };

    const remove = (v: Value) => {
      onChange(value.filter((x) => x !== v));
    };

    return (
      <div ref={rootRef} className={`relative ${className}`}>
        {/* trigger */}
        <button
          ref={ref} // <-- Forwarded ref lands here, enabling RHF auto-focus
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full rounded bg-white pl-3 pr-1 py-2 text-left border border-gray-300 focus:border-2 focus:border-violet-600 flex items-center justify-between gap-2"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <div className="flex flex-wrap gap-1 items-center">
            {value.length === 0 && (
              <span className="text-gray-500">{placeholder}</span>
            )}
            {value.length > 0 &&
              value.map((v) => {
                const label = options.find((o) => o.value === v)?.label ?? v;
                return (
                  <span
                    key={String(v)}
                    className="inline-flex items-center gap-1 rounded bg-violet-100 text-violet-800 px-2 py-0.5 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {label}
                    <X
                      className="h-3.5 w-3.5 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        remove(v);
                      }}
                    />
                  </span>
                );
              })}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 text-gray-500" />
        </button>

        {/* popover */}
        {open && (
          <div
            className="absolute z-50 mt-1 w-full rounded border bg-white shadow-lg"
            onMouseDown={(e) => e.preventDefault()} // keep focus while clicking inside
            role="listbox"
            aria-multiselectable="true"
          >
            {searchable && (
              <div className="p-2 border-b">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search…"
                  className="w-full rounded border px-2 py-1 border-gray-300 outline-none focus:border-2 focus:border-violet-600"
                />
              </div>
            )}
            <ul className="max-h-56 overflow-auto py-1">
              {filtered.length === 0 && (
                <li className="px-3 py-2 text-sm text-gray-500">No results</li>
              )}
              {filtered.map((o) => {
                const checked = value.includes(o.value);
                return (
                  <li
                    key={String(o.value)}
                    className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-violet-50"
                    onClick={() => toggle(o.value)}
                  >
                    <span>{o.label}</span>
                    {checked && <Check className="h-4 w-4 text-violet-600" />}
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between p-2 border-t">
              <button
                type="button"
                className="text-sm text-gray-600 hover:underline"
                onClick={() => onChange([])}
              >
                Clear
              </button>
              <button
                type="button"
                className="rounded bg-violet-600 px-3 py-1.5 text-white text-sm"
                onClick={() => setOpen(false)}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = "MultiSelect";
export default MultiSelect;
