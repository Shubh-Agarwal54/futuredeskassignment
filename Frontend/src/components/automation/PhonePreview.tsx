import { ReactNode } from "react";
import {
  ChevronLeft,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Home,
  Search,
  PlusSquare,
  Film,
  Phone,
  Video,
  Camera,
  Image as ImageIcon,
  Sticker,
  Mic,
  Signal,
  Wifi,
  BatteryFull,
  MoreHorizontal,
} from "lucide-react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] rounded-[44px] bg-black border-[10px] border-black shadow-2xl overflow-hidden">
      {/* Dynamic island */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black z-30" />
      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-9 px-6 flex items-center justify-between text-[11px] text-white z-20 pt-2.5">
        <span className="font-semibold tracking-tight">9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="h-3 w-3" strokeWidth={2.5} />
          <Wifi className="h-3 w-3" strokeWidth={2.5} />
          <BatteryFull className="h-3.5 w-3.5" strokeWidth={2} />
        </div>
      </div>
      <div className="absolute inset-0 pt-9 text-white">{children}</div>
    </div>
  );
}

export function PostPreview() {
  return (
    <div className="h-full flex flex-col bg-black">
      {/* Header */}
      <div className="px-3 py-2 flex items-center">
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
        <span className="flex-1 text-center text-[15px] font-semibold -ml-5">
          Posts
        </span>
      </div>

      {/* Author row */}
      <div className="px-3 py-2 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 p-[1.5px]">
          <div className="h-full w-full rounded-full bg-neutral-700" />
        </div>
        <span className="text-[12px] font-semibold">aditya.webdesiger</span>
        <MoreHorizontal className="ml-auto h-4 w-4" />
      </div>

      {/* Post placeholder */}
      <div className="mx-3 flex-1 rounded-md border border-dashed border-neutral-600 bg-neutral-800/60 flex items-center justify-center text-center px-6">
        <p className="text-[11px] text-neutral-300 leading-snug">
          Pick a post or reel for
          <br />
          your automation
        </p>
      </div>

      {/* Action icons */}
      <div className="px-3 pt-2.5 pb-1 flex items-center gap-3">
        <Heart className="h-[18px] w-[18px]" strokeWidth={2} />
        <MessageCircle className="h-[18px] w-[18px] -scale-x-100" strokeWidth={2} />
        <Send className="h-[18px] w-[18px]" strokeWidth={2} />
        <Bookmark className="ml-auto h-[18px] w-[18px]" strokeWidth={2} />
      </div>

      {/* Caption */}
      <div className="px-3 pb-2">
        <p className="text-[11px] font-semibold text-rose-400">aditya.webdesiger</p>
        <p className="text-[10px] text-neutral-500 mt-0.5">View all comments</p>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-neutral-800/80 px-5 pt-2 pb-3 flex items-center justify-between">
        <Home className="h-[18px] w-[18px]" strokeWidth={2.2} fill="white" />
        <Search className="h-[18px] w-[18px]" strokeWidth={2} />
        <PlusSquare className="h-[18px] w-[18px]" strokeWidth={2} />
        <Film className="h-[18px] w-[18px]" strokeWidth={2} />
        <div className="h-[18px] w-[18px] rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 p-[1px]">
          <div className="h-full w-full rounded-full bg-neutral-700" />
        </div>
      </div>
      {/* Home indicator */}
      <div className="flex justify-center pb-1.5">
        <div className="h-[3px] w-24 rounded-full bg-white/90" />
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
      {/* Header */}
      <div className="px-3 py-2 flex items-center gap-2">
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
        <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 p-[1.5px]">
          <div className="h-full w-full rounded-full bg-neutral-700" />
        </div>
        <span className="text-[12px] font-semibold flex-1">aditya.webdesiger</span>
        <Phone className="h-[16px] w-[16px]" strokeWidth={2} />
        <Video className="h-[16px] w-[16px]" strokeWidth={2} />
      </div>

      {/* Conversation */}
      <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden">
        <div className="flex gap-1.5 items-end">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-amber-400 p-[1px] shrink-0">
            <div className="h-full w-full rounded-full bg-neutral-700" />
          </div>
          <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-neutral-800 px-3 py-2 text-[10.5px] leading-snug">
            {message}
          </div>
        </div>
        <div className="ml-[30px] space-y-1.5 max-w-[78%]">
          {buttons.map((b) => (
            <div
              key={b}
              className="rounded-xl bg-neutral-700/80 text-center py-2 text-[11px] font-semibold"
            >
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Input bar */}
      <div className="px-3 pb-2 pt-1 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
          <Camera className="h-4 w-4 text-white" strokeWidth={2.2} />
        </div>
        <div className="flex-1 rounded-full bg-neutral-900 border border-neutral-700 pl-3 pr-2 py-1.5 flex items-center">
          <span className="flex-1 text-[11px] text-neutral-500">Message...</span>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <ImageIcon className="h-3.5 w-3.5" strokeWidth={2} />
            <Sticker className="h-3.5 w-3.5" strokeWidth={2} />
            <Mic className="h-3.5 w-3.5" strokeWidth={2} />
          </div>
        </div>
      </div>
      {/* Home indicator */}
      <div className="flex justify-center pb-1.5">
        <div className="h-[3px] w-24 rounded-full bg-white/90" />
      </div>
    </div>
  );
}
