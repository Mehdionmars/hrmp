import { SideNavItemGroup } from "@/types/type";
import { User } from "lucide-react";
import { BsEnvelope, BsGear, BsHouseDoor, BsKanban, BsListUl, BsQuestionCircle } from "react-icons/bs";
import { FiActivity, FiCalendar, FiDollarSign, FiUsers   } from "react-icons/fi";


export const SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/',
            icon: <BsHouseDoor size={20} />,
        }]
    },
    {
        title: "Manage",
        menuList: [
            {
                title: 'Products',
                path: '/products',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/products' },
                    { title: 'New', path: '/products/new' },
                ],
            },
            {
                title: 'Orders',
                path: '/orders',
                icon: <BsListUl size={20} />,
            },
            {
                title: 'Users',
                path: '/users',
                icon: <User size={20} />,
            },
            {
                title: 'Analytics & Reports',
                path: '/analytic',
                icon: <FiActivity  size={20} />,
            },
            {
                title: 'Calendar',
                path: '/calendar',
                icon: <FiCalendar size={20} />,
            },
            {
                title: 'Human Resources',
                path: '/hr',
                icon: <FiUsers  size={20} />,
            },
            {
                title: 'Payroll',
                path: '/payroll',
                icon: <FiDollarSign size={20} />,
            }
        ]
    },
    {
        title: "Others",
        menuList: [
            {
                title: 'Account',
                path: '/account',
                icon: <BsGear size={20} />,
            },
            {
                title: 'Feedbacks',
                path: '/feedbacks',
                icon: <BsEnvelope size={20} />,
            },
            {
                title: 'Help',
                path: '/help',
                icon: <BsQuestionCircle size={20} />,
            }
        ]
    }

];