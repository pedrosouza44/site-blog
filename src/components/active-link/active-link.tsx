'use client';
import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps

export const ActiveLink = ({children, href, ...rest }: ActiveLinkProps) => {
  // const router = useRouter();
  // const isCurrentPath = router.asPath === href || router.asPath === rest.as || router.asPath.startsWith(String(rest.as));
  const linkPath = typeof href === 'string' ? href : href.pathname ?? '';
  const pathname = usePathname();
  const isActive = pathname === linkPath || pathname?.startsWith(`${linkPath}/`)

  return (
    <Link 
      {...rest}
      href={href} 
      className={cn('text-action-sm font-medium transition-colors hover:text-blue-200', isActive ? 'text-blue-200' : 'text-gray-100')}
    >
      {children}
    </Link>
  )
}