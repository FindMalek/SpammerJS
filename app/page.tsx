
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@component/ui/Card"
import {
  TabsContent
} from "@component/ui/Tabs"

import Web3Form from "@component/form/Web3Form";
import EmailJsForm from "@component/form/EmailJS";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const spammer = searchParams.spammer as string | undefined;

  if (spammer === "web3-forms") {
    return (
      <TabsContent value="web3-forms">
        <Card>
          <CardHeader>
            <CardTitle>EmailJS</CardTitle>
            <CardDescription>
              Search your friend code base for the exposed emailjs keys.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Web3Form />
          </CardContent>
        </Card>
      </TabsContent>
    )
  }

  if (spammer === "email-js") {
    return (
      <TabsContent value="email-js">
        <Card>
          <CardHeader>
            <CardTitle>EmailJS</CardTitle>
            <CardDescription>
              Search your friend code base for the exposed emailjs keys.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <EmailJsForm />
          </CardContent>
        </Card>
      </TabsContent>
    )
  }

  return (
    <TabsContent value="email-js">
      <Card>
        <CardHeader>
          <CardTitle>EmailJS</CardTitle>
          <CardDescription>
            Search your friend code base for the exposed emailjs keys.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <EmailJsForm />
        </CardContent>
      </Card>
    </TabsContent>);
}
