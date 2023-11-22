const canConstruct = (ransomNote, magazine) => {
    let dicObj = {};
    for (let i = 0; i < magazine.length; ++i) {
      if (dicObj[magazine[i]]) ++dicObj[magazine[i]];
      else dicObj[magazine[i]] = 1;
    }
    for (let i = 0; i < ransomNote.length; ++i) {
      if (dicObj[ransomNote[i]] === undefined || dicObj[ransomNote[i]] <= 0) return false;
      --dicObj[ransomNote[i]];
    }
    return true;
  };