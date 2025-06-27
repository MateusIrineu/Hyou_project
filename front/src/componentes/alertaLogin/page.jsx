"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AlertLogin() {

  const router = useRouter();

  useEffect(() => {
    alert("Login realizado com sucesso!");
    router.push("/");
  }, [router]);

  return null;
}
