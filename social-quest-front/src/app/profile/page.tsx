import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Chip,
    Divider,
} from "@nextui-org/react";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMdTrophy } from "react-icons/io";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import NavbarComponent from "../navbar/navbarComponent";

export default function Profile() {
    const days = "Jours d'affilés";

    return (
        <>
            <NavbarComponent />
            <div className="mt-2">
                <div className="flex justify-center">
                    <Card style={{ width: "400px" }}>
                        <CardHeader>
                            <div className="flex gap-3 items-center">
                                <Avatar
                                    isBordered
                                    radius="full"
                                    size="lg"
                                    src="/profile-picture.png"
                                />
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-semibold leading-none text-default-600">
                                        Antoine Gillet
                                    </h4>
                                    <h5 className="text-small text-default-500">
                                        @antoinegillet
                                    </h5>
                                </div>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <div className="flex gap-1 mb-2">
                                <Chip color="primary" variant="bordered">
                                    5 amis
                                </Chip>
                                <Chip color="primary" variant="bordered">
                                    3 abonnés
                                </Chip>
                            </div>
                            <Button
                                color="primary"
                                className="w-full"
                                startContent={<HiOutlineUserPlus size={20} />}
                            >
                                Ajouter un ami
                            </Button>
                        </CardBody>
                        <Divider />
                        <CardBody>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-start border p-3 rounded-lg">
                                    <div className="flex items-center">
                                        <FaFireFlameCurved
                                            className="text-orange-500 mr-2"
                                            size={24}
                                        />
                                        <span className="text-xl font-semibold mb-1">
                                            5
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        {days}
                                    </p>
                                </div>

                                <div className="flex flex-col items-start border p-3 rounded-lg">
                                    <div className="flex items-center">
                                        <IoMdTrophy
                                            className="text-yellow-400 mr-2"
                                            size={24}
                                        />
                                        <span className="text-xl font-semibold mb-1">
                                            29
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Points
                                    </p>
                                </div>

                                <div className="flex flex-col items-start border p-3 rounded-lg">
                                    <div className="flex items-center">
                                        <FaBook
                                            className="text-blue-500 mr-2"
                                            size={24}
                                        />
                                        <span className="text-xl font-semibold mb-1">
                                            7
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Parcours complétés
                                    </p>
                                </div>

                                <div className="flex flex-col items-start border p-3 rounded-lg">
                                    <div className="flex items-center">
                                        <MdOutlineIncompleteCircle
                                            className="text-blue-400 mr-2"
                                            size={24}
                                        />
                                        <span className="text-xl font-semibold">
                                            25%
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        Complétion
                                    </p>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}
