"use client";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const CALCULATOR_TITLE = "Welcome to the Calculator!";
export default function CalculatorPage() {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const router = useRouter();


    function handleFirstChanged(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setFirst(event.target.value)
    }
    
    function handleLastName(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        setSecond(event.target.value)
    }

    function calculate(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
            router.push('/result?op1=' + first +'&op2=' + second)

    }


  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div>{CALCULATOR_TITLE}</div>
      <Box
        component="section"
        sx={{
          p: 1,
          bgcolor: "#6F6F6F",
          border: "1px dashed black",
          borderRadius: 2,
          m: 1,
        }}
      >
        <div className="flex flex-col p-2">
          <div className="flex flex-row space-x-2">
            <TextField className="bg-white rounded-,d" required name="op_1" label="First" value={first} onChange={handleFirstChanged} />
            <label className="p-2 py-5">Plus</label>
            <TextField className="bg-white rounded-md" required name="op_2" label="Second" value={second} onChange={handleLastName} />
          </div>
        </div>
        <div className="p-2 flex flex-row justify-end">
          <Button variant="contained" onClick={calculate}>
            Calculate
          </Button>
        </div>
      </Box>
    </main>
  );
}
