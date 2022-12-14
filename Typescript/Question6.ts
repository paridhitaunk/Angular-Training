class count
{
	function isVowel(ch:string) 
    {
		ch = ch.toUpperCase();
		return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
	}

	function countString(str)
	{
		var count = 0;
		for (var i = 0; i < str.length; i++)
    {
        if(isVowel(str[0]))
        {
		if (isVowel(str[i]))
        {
			++count;
        }
        return("the count of vowel is" + count);
        }
        else
        {
            if(!isVowel(str[i]))
            {
                ++count;
            }
            return("the count of consonant is" + count);
        }
    }
	}
}