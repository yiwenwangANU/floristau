import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { Popover } from "radix-ui";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <Footer />
    </div>
  );
}
