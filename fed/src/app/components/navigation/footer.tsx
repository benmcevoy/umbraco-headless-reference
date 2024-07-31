import { Link } from "@nextui-org/link";
import { GetFooter } from "@/lib/navigationService"

export async function Footer() {
  const menu = await GetFooter()

  return (<div className="flex items-center gap-4 text-current">
    {menu.map((item, index) => (
      <Link key={index}
        isExternal={item.isExternal}
        showAnchorIcon={item.isExternal}
        href={item.href}>
        {item.label}
      </Link>
    ))}
  </div>);
}