import { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] rounded-[44px] bg-black border-[10px] border-black shadow-2xl overflow-hidden">
      {/* notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-28 rounded-full bg-black z-10" />
      {/* status bar */}
      <div className="absolute top-0 left-0 right-0 px-6 pt-3 flex items-center justify-between text-[11px] text-white z-20">
        <span className="font-semibold">9:41</span>
        <span className="opacity-80">••• ⌃ ▮</span>
      </div>
      <div className="absolute inset-0 pt-9 text-white">{children}</div>
    </div>
  );
}

export function PostPreview() {
  return (
    <div className="h-full flex flex-col bg-black">
      <div className="px-4 pb-2 flex items-center justify-between">
        <span className="text-lg">‹</span>
        <span className="text-sm font-semibold">Posts</span>
        <span className="w-3" />
      </div>
      <div className="px-4 py-2 flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-neutral-700" />
        <span className="text-xs font-medium">aditya.webdesiger</span>
        <span className="ml-auto text-neutral-500">•••</span>
      </div>
      <div className="mx-4 flex-1 rounded-md bg-neutral-800 flex items-center justify-center text-center px-6">
        <p className="text-xs text-neutral-400">
          Pick a post or reel for
          <br />
          your automation
        </p>
      </div>
      <div className="px-4 py-2 flex items-center gap-4 text-base">
        <span>♡</span>
        <span>💬</span>
        <span>↗</span>
        <span className="ml-auto">🔖</span>
      </div>
      <div className="px-4 pb-2">
        <p className="text-xs font-medium">aditya.webdesiger</p>
        <p className="text-[10px] text-neutral-500">View all comments</p>
      </div>
      <div className="border-t border-neutral-800 px-6 py-2 flex items-center justify-between text-base">
        <span>⌂</span>
        <span>⌕</span>
        <span>⊕</span>
        <span>▶</span>
        <span className="h-5 w-5 rounded-full bg-neutral-600" />
      </div>
    </div>
  );
}

export function DmPreview({
  message,
  buttons,
}: {
  message: string;
  buttons: string[];
}) {
  return (
    <div className="h-full flex flex-col bg-black">
      <div className="px-4 pb-2 flex items-center gap-2">
        <span className="text-lg">‹</span>
        <div className="h-7 w-7 rounded-full bg-neutral-700" />
        <span className="text-xs font-semibold flex-1">aditya.webdesiger</span>
        <span className="text-sm">📞</span>
        <span className="text-sm">📹</span>
      </div>
      <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden">
        <div className="flex gap-1 items-end">
          <div className="h-6 w-6 rounded-full bg-neutral-700 shrink-0" />
          <div className="max-w-[78%] rounded-2xl rounded-bl-sm bg-neutral-800 p-3 text-[11px] leading-snug">
            {message}
          </div>
        </div>
        <div className="ml-7 space-y-1.5 max-w-[78%]">
          {buttons.map((b) => (
            <div
              key={b}
              className="rounded-lg bg-neutral-700/70 text-center py-1.5 text-[11px] font-medium"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-neutral-800 px-3 py-2 flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-blue-500 flex items-center justify-center text-xs">📷</div>
        <div className="flex-1 rounded-full bg-neutral-800 px-3 py-1.5 text-[11px] text-neutral-500">
          Message...
        </div>
      </div>
    </div>
  );
}
