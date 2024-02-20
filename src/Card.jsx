


function Card() {
  const SAMPLE_WORD = [
    {
      id: 1,
      title: "Misnomer",
      phonetics: "/mɪsˈnəʊmə/",
      defination: "misnaming someone or something"
    },
    {
      id: 2,
      title: "Source",
      phonetics: "/sɔːs/",
      defination: "A point of origin"
    },

    {
      id: 3,
      title: "Procurement",
      phonetics: "/prəˈkjʊr.mənt, prəˈkjʊə.mənt/",
      defination: "Process of procuring"
    },
    {
      id: 4,
      title: "Procure",
      phonetics: "/prəˈkjʊə,prəˈkjɔː/",
      defination: "To get something"
    }
  ];
  return (
    <div>
      <h2>{SAMPLE_WORD[0].title}</h2>
      <span>{SAMPLE_WORD[0].phonetics}</span>
      <p>{SAMPLE_WORD[0].defination}</p>
    </div>
  );
}

export default Card;