import { clientData } from "./clientsData"

export const ClientComponent = () => {
    return (
        <div className="absolute top-56 mt-10 w-[1100px] items-center justify-center">
            <h2 className="text-6xl font-bold text-text-primary uppercase duration-1000 ease-in-out text-center">
                clients
            </h2>
            <div className="flex flex-row flex-wrap mt-10">
                {clientData.map((data, index) => (
                    <div className="basis-1/4 justify-between py-5" key={index}>
                        <div className="text-text-primary font-medium text-sm uppercase">{data.name}</div>
                        <div className="text-text-primary font-medium text-sm lowercase">{data.website}</div>
                    </div>
                ))}
            
            </div>
        </div>
    )
}
