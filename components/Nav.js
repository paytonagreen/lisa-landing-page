import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavStyles from "./styles/NavStyles";
import Link from "next/link";

function Nav() {

  const router = useRouter();

  return (
    <NavStyles>
      <h1>Payton Green</h1>
      {/* <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">About</Link>
        </li>
        <li className={router.pathname == "/work" ? "active" : ""}>
          <Link href="/work">Work</Link>
        </li>
        <li className={router.pathname == "/contact" ? "active" : ""}>
          <Link href="/contact">Contact</Link></li>
      </ul> */}
    </NavStyles>
  );
}

export default Nav;
