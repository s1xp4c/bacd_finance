import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: 'OpenAI API key not configured, please follow instructions in README.md',
      },
    });
    return;
  }

  const coin = req.body.coin || '';
  if (coin.trim().length === 0) {
    res.status(400).json({
      error: {
        message: 'Please enter a valid Crypto coin',
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(coin),
      temperature: 0.9,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
}

function generatePrompt(coin) {
  const capitalizedCoin = coin[0].toUpperCase() + coin.slice(1).toLowerCase();
  return `Suggest 2 similar crypto coins and explain why

Coin: BTC
Names: 
ETH is a layer one coin with vast network adoption, SOL is looking good in terms of development and followers, ADA has massive amount of tokens staked and is still early in terms of deployment
Coin: DOGE 
Names: 
FREE is a meme coin but has huge adoption by wallets and community, SHIB is a meme coin but now aims for the moon by burning tokens with each transaction, ELON is a meme coin riding the name of Elon Musk
Coin: ${capitalizedCoin}
Names:`;
}
