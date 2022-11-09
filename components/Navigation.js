import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  AcademicCapIcon,
  CommandLineIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const resources = [
  {
    name: 'Home',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: HomeIcon,
  },
  {
    name: 'About',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#about',
    icon: AcademicCapIcon,
  },
  {
    name: 'Skills',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#skills',
    icon: CommandLineIcon,
  },
  { name: 'Projects', 
    description: 'Understand how we take your privacy seriously.', 
    href: '#projects', 
    icon: ClipboardDocumentListIcon 
  },
  { name: 'Contacts',
    description: 'Understand how we take your privacy seriously.', 
    href: '#contacts', 
    icon: ChatBubbleBottomCenterTextIcon 
  },
]

export default function Navigation() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Raul Carini</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/assets/svg/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                {resources.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                    <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                ))} 
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/logo.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                    {resources.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                        >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                        </a>
                    ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
