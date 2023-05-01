import { useState } from "react";
import Form from "@/components/Form/Form";
import signUp from "@/services/auth/signUp";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //@ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }
    // else successful
    console.log("SignUp");
    console.log(result);
    return router.push("/Login");
  };

  return (
    <Form
      handleSubmitProp={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
      btn={"Registrar"}
      register={true}
    />
  );
}
