import { SVGProps } from "react";

const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export interface ItemCounterProps {
  count: number;
}

export default function ItemCounter({ count }: ItemCounterProps) {
  return (
    <div className="text-default-400 flex items-center gap-1">
      <span className="text-small">{count}</span>
      <ChevronRightIcon className="text-xl" />
    </div>
  );
}
