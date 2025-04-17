type Props = {
  type: "login" | "singUp";
};

function AuthForm({ type }: Props) {

  return <div>AuthForm {type}</div>;
}

export default AuthForm;
