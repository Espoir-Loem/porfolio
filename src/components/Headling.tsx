import Badge from "./Badge";

const Headling = () => {
    return (
        <div className=" flex flex-col items-center gap-7">
            <Badge zoom={.75}>🫣 La curiosité t’a mené ici</Badge>
            <h2 className="text-4xl font-semibold text-center">Ensemble, donnons vie à vos rêves ✨</h2>
            <p className="px-20 text-[20px] text-center font-light">
                ✨ Si tu es arrivé jusqu’ici, c’est que quelque chose a éveillé ta curiosité…
                Alors, es-tu prêt(e) à découvrir ce qui t’attend ou aller encore plus loin ?
                🚀❤️ Clique ici et laisse-toi emporter par, l’aventure 👇🏾
            </p>
        </div>
    );
}

export default Headling