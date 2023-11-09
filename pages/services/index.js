import ContainerBlock from "@/components/ContainerBlock";
import Footer from "@/components/Footer";
import GridMission from "@/components/landing/GridMission";
import BackgroundServ from "@/components/servicelayout/Backgroundserv";

export default function ServicePage() {

    const dataservice = [
        {
            id: "service1",
            title: "Service 1",
            description: "lorem ipsum",
            image: ""
        },
        {
            id: "service2",
            title: "Service 2",
            description: "lorem ipsum",
            image: ""
        },
        {
            id: "service3",
            title: "Service 3",
            description: "lorem ipsum",
            image: ""
        },
    ]

    return(
        <ContainerBlock>
            <BackgroundServ/>
            <GridMission data={dataservice} title={"Nos services"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam harum fuga, nulla hic sit aperiam perspiciatis iste facilis, repellendus eaque officia velit deserunt animi! Soluta aliquam vero corrupti neque."}/>
            <Footer/>
        </ContainerBlock>
    )
}