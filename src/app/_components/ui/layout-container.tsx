export default function LayoutContainer(props: { children: React.ReactNode }) {
  return <div className="w-full max-w-[2300px] space-y-5">{props.children}</div>;
}
