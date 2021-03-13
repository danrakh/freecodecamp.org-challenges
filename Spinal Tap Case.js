function spinalCase(str) {

    var reg = /[^a-zA-Z]+|(?=[A-Z])/g;
    return str.split(reg).join('-').toLowerCase();
  }
  
  console.log(spinalCase('AllThe-small_Things are*great'));

// Spinal case also known as snake case is all-lowercase-words-joined-by-dashes.
// Pascal case is WordsStartingWithCapitalCaseJoined.
// Camel case is asPascalCaseButFirstWordStartsWithLowerCase.
// (?=[A-Z]) oznacza w tym wypadku positive lookup (znajdź dużą literę ale nie czyń jej częścią matcha).
// Przeciwieństwem pozytywnego lookupa jest negatywny lookup, czyli na powyższym przykładzie: (?![A-Z]).