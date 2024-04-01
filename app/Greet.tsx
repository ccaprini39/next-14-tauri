'use client'

import { useEffect, useState } from "react"
import { invoke } from "@tauri-apps/api/tauri"

export default function Greet() {
  const [greeting, setGreeting] = useState<string>('')
  const [name, setName] = useState<string>('')

  async function fetchGreeting(string : string) {
    try {
      const result = await invoke<string>('greet', { name: string });
      setGreeting(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {

    fetchGreeting(name);
  }, [name])


  return (
    <div>
      <>
        <h1 className="text-4xl font-bold text-center">
          {greeting}
        </h1>
        <input
          type="text"
          className="border border-gray-300 p-2 text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>
          click me
        </button>
      </>
    </div>
  )
}
