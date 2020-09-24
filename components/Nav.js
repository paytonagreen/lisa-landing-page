import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavStyles from "./styles/NavStyles";
import Link from "next/link";

function Nav() {

  const router = useRouter();

  return (
    <NavStyles>
      <h1>Lisa Alley</h1>
    </NavStyles>
  );
}

export default Nav;
