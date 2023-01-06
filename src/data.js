const data = [
  {
    question: "Quelle est la capital de la France?",
    incorrectAnswers: ["Lyon", "Liverpool", "Madrid"],
    correctAnswer: "Paris",
  },

  {
    question:
      "Qu'elle est l'emplacement idéal sur un document HTML pour importer un Style(css) externe?",
    incorrectAnswers: [
      "Dans la section <body>",
      "A la fin du document",
      "Vous ne pouvez pas importer un Style(css) externe",
    ],
    correctAnswer: "Dans la section <head>",
  },
  {
    question:
      "Quelle balise HTML est utilisée pour définir du style en interne ?",
    incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Quel attribut HTML est utilisé pour définir les inline Style?",
    incorrectAnswers: ["class", "font", "styles"],
    correctAnswer: "style",
  },
  {
    question: "Quelle est la syntaxe css correct?",
    incorrectAnswers: [
      "{body:color=black;}",
      "{body;color:black;}",
      "body:color=black;",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    question: "Comment insérer un commentaire en css?",
    incorrectAnswers: [
      "' this is a comment",
      "// this is a comment",
      "// this is a comment //",
    ],
    correctAnswer: "/* this is a comment */",
  },
  {
    question:
      "Qu'elle propriété utiliser pour changer la couleur du background?",
    incorrectAnswers: ["color", "bgcolor", "bgColor"],
    correctAnswer: "background-color",
  },
  {
    question:
      "Comment modifier la couleur du background pour toutes les balises <h1>?",
    incorrectAnswers: [
      "all.h1 {background-color:#FFFFFF;}",
      "h1.setAll {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
  },
];

export default data;
