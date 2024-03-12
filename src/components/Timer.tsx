import timerFormatter from "../utils/timerFormatter";

export default function Timer({ second }: { second: number }) {
   return (
      <section className="p-10">
         <dl className="flex gap-3">
            <dd>Time - </dd>
            <dt>{timerFormatter(second)}</dt>
         </dl>
      </section>
   );
}
