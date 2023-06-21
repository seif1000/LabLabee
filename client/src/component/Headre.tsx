import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/lablabee.png";

const navigation = [{ name: "Labs", href: "/", current: true }];

/// class name helper function
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <div>
      <Disclosure as="nav" className="fixed top-0 w-full bg-white shadow">
        {({ open }) => (
          <>
            <div className=" border-b-[#30b4a5] px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#30b4a5] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
                  <div className=" mr-8 flex flex-shrink-0 items-center">
                    <Link to={"/"}>
                      <img
                        className="block h-5 w-auto  lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                    <Link to={"/"}>
                      <img
                        className="hidden h-5 w-auto lg:block"
                        src={logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="mt-1 flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            "text-md rounded-md bg-white px-3 py-2  font-medium text-gray-900   hover:text-[#30b4a5]"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    to="/add-lab"
                    type="button"
                    className="flex flex-row rounded bg-[#30b4a5] p-3 text-white  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <p>Add Lab</p>
                    <PlusIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#30b4a5] text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </div>
  );
};

export default Header;
