import { Suspense, useEffect, useState } from "react";
import SuspenseLoading from "./components/atoms/suspense-loading";
import { useAuthValidateMutation } from "./services/authValidate";
import { ToastContainer } from "react-toastify";
import Permission from "./components/atoms/permisission";
import SplashScreen from "./components/atoms/splash-screen";
import { SkeletonNavbar } from "./components/molecules";
import { Container } from "./components/atoms";
import { useInitializeApiMutation } from "./services/initialize";
import { UserProvider } from "./providers/user-data";
import { ConfirmDialogProvider } from "./providers/confirm-dialog";
// import { Navbar } from "./components/organisms/navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import WithNetworkStatus from "./providers/network-check/with-network-status";
import { ShareManagmentProvider } from "./providers/share";
import Navbar from "./components/organisms/navbar/Navbar";
import Sidebar from "./components/organisms/Sidebar/Sidebar";
import { paths } from "./data/app-routes";
import { AssignmenLaw } from "./pages/services/assignment-law";
import { MainRoutes } from "./routes";
import { ConfigProvider } from "antd";
// test commit
function App() {
  // const [authValidate, { data, isLoading }] = useAuthValidateMutation();

  // const location = useLocation();

  // const [initialize, { data: initData, isLoading: initIsLoading }] =
  //   useInitializeApiMutation();

  // --------------------------------------------------------------------

  // const [isAuth, setIsAuth] = useState<{
  //   status: "loading" | "success" | "error";
  //   message?: string;
  // }>({ status: "loading" });

  // const request = () => {
  //   setIsAuth({ status: "loading" });
  //   initialize()
  //     .unwrap()
  //     .then(() => {
  //       authValidate()
  //         .unwrap()
  //         .then((res) => {
  //           if (res.resCode === 1) {
  //             setIsAuth({ status: "success" });
  //           } else {
  //             setIsAuth({ status: "error", message: res.resMessage });
  //           }
  //         })
  //         .catch((err) => {
  //           setIsAuth({ status: "error", message: err.data.resMessage });
  //         });
  //     });
  // };
  // useEffect(() => {
  //   request();
  // }, []);

  // if (isAuth.status !== "success") {
  //   return (
  //     <SplashScreen
  //       panelName={initData?.info?.name}
  //       logoImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABTCAYAAADnR+s9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJGN0Q1NjE1RTE4MTFFQjg0MzZBRTZGMEZEMUVFQTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJGN0Q1NjI1RTE4MTFFQjg0MzZBRTZGMEZEMUVFQTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkY3RDU1RjVFMTgxMUVCODQzNkFFNkYwRkQxRUVBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkY3RDU2MDVFMTgxMUVCODQzNkFFNkYwRkQxRUVBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8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"
  //       isLoading={isLoading}
  //       message={isAuth.message}
  //       status={isAuth.status}
  //       ssoUrl={initData?.info?.sso}
  //     />
  //   );
  // }

  // if (initIsLoading) {
  //   return (
  //     <>
  //       <SkeletonNavbar />
  //       <Container>SkeleetonMainPage</Container>
  //     </>
  //   );
  // }

  return (
    <>
      <WithNetworkStatus>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemSelectedColor: "#3949AB",
                itemSelectedBg: "#EBECF6",
                itemColor: "#696C70",
                borderRadius:10
              },
            },
          }}
        >
          <Suspense fallback={<SuspenseLoading />}>
            <UserProvider
              // data={[]}
              accessNodes={[]}
            >
              <div
                className={`flex w-full min-h-screen relative items-center justify-center`}
              >
                <div className="w-full grow min-h-screen z-10 bg-[#fbfcff]">
                  <ConfirmDialogProvider>
                    {/* <Permission access="HAXPanel"> */}
                    <ShareManagmentProvider>
                      <div className=" flex justify-start flex-row-reverse ">
                        <div className="flex flex-col w-full h-full ">
                          <Navbar />
                          <div className="m-5  min-h-[82vh] bg-background-50 rounded-2xl p-6 shadow-lg relative">
                            <Routes>
                              <Route path="/*" element={<MainRoutes />} />
                            </Routes>
                            <Outlet />
                          </div>
                        </div>
                        <Sidebar />
                      </div>
                      <ToastContainer />
                    </ShareManagmentProvider>
                    {/* </Permission> */}
                  </ConfirmDialogProvider>
                </div>
              </div>
            </UserProvider>
          </Suspense>
        </ConfigProvider>
      </WithNetworkStatus>
    </>
  );
}
export default App;
