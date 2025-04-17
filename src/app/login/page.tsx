import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import AuthForm from "@/components/AuthForm";
function LoginPage() {
  return (
    <div>
      <Card className="w-full max-w-md">
        <CardHeader className="mb-4">
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
      </Card>
      <AuthForm type="login" />
    </div>
  );
}

export default LoginPage;
