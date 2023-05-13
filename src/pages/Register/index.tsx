import { useState } from "react";
import Form from "@/components/Form/Form";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/authService";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [fail, setFail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //@ts-ignore
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signUp(email, password);
      return router.push("/Home");
    } catch (error: any) {
      //@ts-ignore
      const errorDescription: string = Object.values(error)[0];

      if (errorDescription.includes("weak-password")) {
        setErrorMessage("A senha deve conter mais de 6 dígitos.");
      } else if (errorDescription.includes("email-already-in-use")) {
        setErrorMessage("O e-mail já está cadastrado.");
      } else if (errorDescription.includes("invalid-email")) {
        setErrorMessage("E-mail inválido.");
      } else {
        setErrorMessage(errorDescription);
      }

      setFail(true);
    }
  };

  return (
    <Form
      handleSubmitProp={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
      onFail={fail}
      errorMessage={errorMessage}
      btn={"Registrar"}
      register={true}
    />
  );
}
