import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function SignInButton() {
  const { instance } = useMsal();

  return <button onClick={() => instance.loginRedirect()}>Sign In</button>;
}

function SignOutButton() {
  const { instance } = useMsal();

  return <button onClick={() => instance.logoutRedirect()}>Sign Out</button>;
}

function WelcomeUser() {
  const { accounts } = useMsal();
  const username = accounts[0].username;

  return <p>Welcome, {username}</p>;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Auth Prototype</title>
      </Head>

      <AuthenticatedTemplate>
        <p>This will only render if a user is signed-in.</p>
        <WelcomeUser />
        <SignOutButton />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>This will only render if a user is not signed-in. Hello stranger</p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </div>
  );
}
