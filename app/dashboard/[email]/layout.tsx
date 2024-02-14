import { AppProps } from "next/app";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RootLayout from "@/app/layout";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout withNavbar={false}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            marginTop: "100px",
          }}
        >
          {/* Content area */}
          {children}
        </div>
      </div>
    </RootLayout>
  );
}

export default layout;
