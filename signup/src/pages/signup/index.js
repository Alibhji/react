import ContainerMed from "../../components/containers/ContainderMed";
import SignupForm from "../../components/panels/login_forms/Form2";
import Form3 from "../../components/panels/login_forms/Form3";


const Signup_config = {
    header: "Please sign up to continue",
    cardTitle: "Register",
    text: "",
    item: <SignupForm/>,
    maxWidth: "600px",
}

export default function SignUp(probs) {
  return (
  <div>
  {/* <ContainerMed {...Signup_config}></ContainerMed> */}
  <Form3></Form3>
    </div>
  
  
  );
}
