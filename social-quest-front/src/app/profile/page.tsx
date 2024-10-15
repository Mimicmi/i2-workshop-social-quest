import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Chip,
    Divider,
} from "@nextui-org/react";
import { HiOutlineUserPlus } from "react-icons/hi2";
import Link from "next/link";
import NavbarComponent from "../navbar/navbarComponent";

export default function Profile() {
    return (
        <>
            <NavbarComponent />
            <div>
                <div className="flex justify-center">
                    <Card className="max-w-[340px]">
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
                                        @antoinegillet666lediable
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
                            <p>test</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
}
