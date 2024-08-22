import { calculateCurrentTime, getCurrentTimeInGMTPlus4 } from "@/helper/helper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-40 pt-36 pb-10 bg-primary">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-secondary">YOUR TIME</p>
          <p>{calculateCurrentTime()}</p>
        </div>
        <div>
          <p className="text-secondary uppercase">a creative studio WORKING WITH BRANDS TO stand out in the GLOBAL market. drop us a line.
          </p>
        </div>
        <div className="text-right">
          <p className="text-secondary uppercase">Our time</p>
          <p>{getCurrentTimeInGMTPlus4()}</p>
        </div>
      </div>
    </main>
  );
}
