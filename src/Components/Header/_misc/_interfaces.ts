import { signedUserInfoInterface } from "../../../_misc/interfaces"
import React from "react"


export interface desktopPropsInterface {
	loggedUser: signedUserInfoInterface | null,
	className?: string,
}

export interface asideNavPropsInterface {
	loggedUser: signedUserInfoInterface | null,
	className?: string,
}

export interface mobilePropsInterface {
	toggleAsideNav: (event: React.MouseEvent) => void,
	className?: string
}