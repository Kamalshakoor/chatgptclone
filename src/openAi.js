import OpenAiApi from 'openai';
// const {Configuration, OpenAiApi} = require('openai');
// const configuration = new Configuration({ apiKey:  "sk-proj-96GaHGnDB7kHQ2ZsSYaWT3BlbkFJjMRvY9lTvQzQGNcobbHJ"});
const openai = new OpenAiApi({
  apiKey:  "sk-proj-96GaHGnDB7kHQ2ZsSYaWT3BlbkFJjMRvY9lTvQzQGNcobbHJ",
  dangerouslyAllowBrowser: true
});


export async function getAnswer(question) {
  const completion = await openai.chat.completions.create({
    // model: "text-davinci-003",
    model:"gpt-3.5-turbo",
    prompt: question,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty:0,
    presence_penalty:0,
    temperature: 0.5,
  })
  return completion.data.choices[0].text;
};