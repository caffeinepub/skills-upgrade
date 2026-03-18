import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";



actor {
  type BilingualText = {
    en : Text;
    hi : Text;
  };

  type PersonalityType = {
    code : Text;
    name : BilingualText;
    description : BilingualText;
    strengths : [BilingualText];
    weaknesses : [BilingualText];
    likes : [BilingualText];
    dislikes : [BilingualText];
    positive : [BilingualText];
    negative : [BilingualText];
    balanceTips : BilingualText;
  };

  type QuizQuestion = {
    question : BilingualText;
    answerA : BilingualText;
    answerB : BilingualText;
    answerAEI : BilingualText;
    answerASNL : BilingualText;
    answerATFL : BilingualText;
    answerAJPL : BilingualText;
    answerBEI : BilingualText;
    answerBSNL : BilingualText;
    answerBTFL : BilingualText;
    answerBJPL : BilingualText;
  };

  let personalityTypes = Map.empty<Text, PersonalityType>();
  let quizQuestions = Map.empty<Text, QuizQuestion>();

  public shared ({ caller }) func initialize() : async () {
    // Add personality types
    personalityTypes.add(
      "INTJ",
      {
        code = "INTJ";
        name = { en = "The Architect"; hi = "वास्तुकार" };
        description = {
          en = "Strategic planners who are imaginative and decisive.";
          hi = "रणनीतिक योजनाकार जो कल्पनाशील और निर्णायक होते हैं।";
        };
        strengths = [
          { en = "Strategic thinking"; hi = "रणनीतिक सोच" },
        ];
        weaknesses = [
          { en = "Arrogance"; hi = "अहंकार" },
        ];
        likes = [
          { en = "Challenges"; hi = "चुनौतियाँ" },
        ];
        dislikes = [
          { en = "Inefficiency"; hi = "अकुशलता" },
        ];
        positive = [
          { en = "Determined"; hi = "दृढ़" },
        ];
        negative = [
          { en = "Critical"; hi = "आलोचनात्मक" },
        ];
        balanceTips = {
          en = "Practice patience and empathy.";
          hi = "धैर्य और सहानुभूति का अभ्यास करें।";
        };
      },
    );

    // Add quiz questions
    quizQuestions.add(
      "q1",
      {
        question = {
          en = "Do you prefer to work alone or in a group?";
          hi = "क्या आप अकेले काम करना पसंद करते हैं या समूह में?";
        };
        answerA = {
          en = "Alone";
          hi = "अकेले";
        };
        answerB = {
          en = "Group";
          hi = "समूह";
        };
        answerAEI = { en = "I"; hi = "I" };
        answerASNL = { en = "S"; hi = "S" };
        answerATFL = { en = "T"; hi = "T" };
        answerAJPL = { en = "J"; hi = "J" };
        answerBEI = { en = "E"; hi = "E" };
        answerBSNL = { en = "N"; hi = "N" };
        answerBTFL = { en = "F"; hi = "F" };
        answerBJPL = { en = "P"; hi = "P" };
      },
    );
  };

  public query ({ caller }) func getAllPersonalityTypes() : async [PersonalityType] {
    personalityTypes.values().toArray();
  };

  public query ({ caller }) func getPersonalityType(code : Text) : async PersonalityType {
    switch (personalityTypes.get(code)) {
      case (null) { Runtime.trap("Personality type not found") };
      case (?personality) { personality };
    };
  };

  public query ({ caller }) func getAllQuizQuestions() : async [QuizQuestion] {
    quizQuestions.values().toArray();
  };
};
