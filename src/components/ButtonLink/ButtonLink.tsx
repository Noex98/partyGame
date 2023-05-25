import Link from "next/link";
import { Button, Props as ButtonProps } from "../";

interface Props extends Omit<ButtonProps, 'tabIndex'> {
    href: string,
}

export const ButtonLink = (props: Props) => {
  return (
    <Link href={props.href}>
        <Button tabIndex={-1} {...props}/>
    </Link>
  )
}
