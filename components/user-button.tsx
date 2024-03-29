import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
   
  function Header() {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
        <h1>My App</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          function mountUserButton(node: HTMLDivElement, props?: UserButtonProps): void;
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton/>
        </SignedOut>
      </header>
    );
  }