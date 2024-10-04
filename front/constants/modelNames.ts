export interface ModelName {
  organization: string;
  modelName: string;
  modelString: string;
  contextLength?: number;
  isPro?: boolean;
  disabled?: boolean;
}
export const modelNames: ModelName[] = [
    {
        'organization': 'OpenAI',
        'modelName': 'GPT 3.5',
        'modelString': 'gpt-3.5-turbo',
        'contextLength': 4096,
        'isPro': true,
    },
    {
        'organization': 'OpenAI',
        'modelName': 'GPT 4',
        'modelString': 'gpt-4-turbo',
        'contextLength': 4096,
        'isPro': true,
    },
    {
        'organization': 'OpenAI',
        'modelName': 'GPT 4o',
        'modelString': 'gpt-4o',
        'contextLength': 4096,
        'isPro': true,
    },
    {
        'organization': 'Anthropic',
        'modelName': 'Claude 3 Opus',
        'modelString': 'claude-3-opus-20240229',
        'contextLength': 200000,
        'isPro': true,
    },
    {
        'organization': 'Anthropic',
        'modelName': 'Claude 3.5 Sonnet',
        'modelString': 'claude-3-5-sonnet-20240620',
        'contextLength': 200000,
        'isPro': true,
    },
    {
        'organization': 'Anthropic',
        'modelName': 'Claude 3 Haiku',
        'modelString': 'claude-3-haiku-20240307',
        'contextLength': 200000,
        'isPro': true,
    },
    {
        'organization': '01.AI',
        'modelName': '01-ai Yi Chat (34B)',
        'modelString': 'zero-one-ai/Yi-34B-Chat',
        'contextLength': 4096,
    },
    {
        'organization': 'Allen AI',
        'modelName': 'OLMo Instruct (7B)',
        'modelString': 'allenai/OLMo-7B-Instruct',
        'contextLength': 2048,
    },
    {
        'organization': 'Allen AI',
        'modelName': 'OLMo Twin-2T (7B)',
        'modelString': 'allenai/OLMo-7B-Twin-2T',
        'contextLength': 2048,
    },
    {
        'organization': 'Allen AI',
        'modelName': 'OLMo (7B)',
        'modelString': 'allenai/OLMo-7B',
        'contextLength': 2048,
    },
    {
        'organization': 'Austism',
        'modelName': 'Chronos Hermes (13B)',
        'modelString': 'Austism/chronos-hermes-13b',
        'contextLength': 2048,
    },
    {
        'organization': 'cognitivecomputations',
        'modelName': 'Dolphin 2.5 Mixtral 8x7b',
        'modelString': 'cognitivecomputations/dolphin-2.5-mixtral-8x7b',
        'contextLength': 32768,
    },
    {
        'organization': 'DeepSeek',
        'modelName': 'Deepseek Coder Instruct (33B)',
        'modelString': 'deepseek-ai/deepseek-coder-33b-instruct',
        'contextLength': 16384,
    },
    {
        'organization': 'DeepSeek',
        'modelName': 'DeepSeek LLM Chat (67B)',
        'modelString': 'deepseek-ai/deepseek-llm-67b-chat',
        'contextLength': 4096,
    },
    {
        'organization': 'garage-bAInd',
        'modelName': 'Platypus2 Instruct (70B)',
        'modelString': 'garage-bAInd/Platypus2-70B-instruct',
        'contextLength': 4096,
    },
    {
        'organization': 'Google',
        'modelName': 'Gemma Instruct (2B)',
        'modelString': 'google/gemma-2b-it',
        'contextLength': 8192,
    },
    {
        'organization': 'Google',
        'modelName': 'Gemma Instruct (7B)',
        'modelString': 'google/gemma-7b-it',
        'contextLength': 8192,
    },
    {
        'organization': 'Gryphe',
        'modelName': 'MythoMax-L2 (13B)',
        'modelString': 'Gryphe/MythoMax-L2-13b',
        'contextLength': 4096,
    },
    {
        'organization': 'LM Sys',
        'modelName': 'Vicuna v1.5 (13B)',
        'modelString': 'lmsys/vicuna-13b-v1.5',
        'contextLength': 4096,
    },
    {
        'organization': 'LM Sys',
        'modelName': 'Vicuna v1.5 (7B)',
        'modelString': 'lmsys/vicuna-7b-v1.5',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Instruct (13B)',
        'modelString': 'codellama/CodeLlama-13b-Instruct-hf',
        'contextLength': 16384,
    },
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Instruct (34B)',
        'modelString': 'codellama/CodeLlama-34b-Instruct-hf',
        'contextLength': 16384,
    },
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Instruct (70B)',
        'modelString': 'codellama/CodeLlama-70b-Instruct-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Instruct (7B)',
        'modelString': 'codellama/CodeLlama-7b-Instruct-hf',
        'contextLength': 16384,
    },
    {
        'organization': 'Meta',
        'modelName': 'LLaMA-2 Chat (70B)',
        'modelString': 'meta-llama/Llama-2-70b-chat-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'LLaMA-2 Chat (13B)',
        'modelString': 'meta-llama/Llama-2-13b-chat-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'LLaMA-2 Chat (7B)',
        'modelString': 'meta-llama/Llama-2-7b-chat-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'mistralai',
        'modelName': 'Mistral (7B) Instruct',
        'modelString': 'mistralai/Mistral-7B-Instruct-v0.1',
        'contextLength': 8192,
    },
    {
        'organization': 'mistralai',
        'modelName': 'Mistral (7B) Instruct v0.2',
        'modelString': 'mistralai/Mistral-7B-Instruct-v0.2',
        'contextLength': 32768,
    },
    {
        'organization': 'mistralai',
        'modelName': 'Mixtral-8x7B Instruct (46.7B)',
        'modelString': 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        'contextLength': 32768,
    },
    {
        'organization': 'NousResearch',
        'modelName': 'Nous Capybara v1.9 (7B)',
        'modelString': 'NousResearch/Nous-Capybara-7B-V1p9',
        'contextLength': 8192,
    },
    {
        'organization': 'NousResearch',
        'modelName': 'Nous Hermes 2 - Mistral DPO (7B)',
        'modelString': 'NousResearch/Nous-Hermes-2-Mistral-7B-DPO',
        'contextLength': 32768,
    },
    {
        'organization': 'NousResearch',
        'modelName': 'Nous Hermes 2 - Mixtral 8x7B-DPO (46.7B)',
        'modelString': 'NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO',
        'contextLength': 32768,
    },
    {
        'organization': 'NousResearch',
        'modelName': 'Nous Hermes 2 - Mixtral 8x7B-SFT (46.7B)',
        'modelString': 'NousResearch/Nous-Hermes-2-Mixtral-8x7B-SFT',
        'contextLength': 32768,
    },
    {
        'organization': 'NousResearch',
        'modelName': 'Nous Hermes LLaMA-2 (7B)',
        'modelString': 'NousResearch/Nous-Hermes-llama-2-7b',
        'contextLength': 4096,
    },
    {
        'organization': 'NousResearch',
        'modelName': 'Nous Hermes Llama-2 (13B)',
        'modelString': 'NousResearch/Nous-Hermes-Llama2-13b',
        'contextLength': 4096,
    },
    {
        'organization': 'NousResearch',
        'modelName': 'Nous Hermes-2 Yi (34B)',
        'modelString': 'NousResearch/Nous-Hermes-2-Yi-34B',
        'contextLength': 4096,
    },
    {
        'organization': 'OpenChat',
        'modelName': 'OpenChat 3.5 (7B)',
        'modelString': 'openchat/openchat-3.5-1210',
        'contextLength': 8192,
    },
    {
        'organization': 'OpenOrca',
        'modelName': 'OpenOrca Mistral (7B) 8K',
        'modelString': 'Open-Orca/Mistral-7B-OpenOrca',
        'contextLength': 8192,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 Chat (0.5B)',
        'modelString': 'Qwen/Qwen1.5-0.5B-Chat',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 Chat (1.8B)',
        'modelString': 'Qwen/Qwen1.5-1.8B-Chat',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 Chat (4B)',
        'modelString': 'Qwen/Qwen1.5-4B-Chat',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 Chat (7B)',
        'modelString': 'Qwen/Qwen1.5-7B-Chat',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 Chat (14B)',
        'modelString': 'Qwen/Qwen1.5-14B-Chat',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 Chat (72B)',
        'modelString': 'Qwen/Qwen1.5-72B-Chat',
        'contextLength': 32768,
    },
    {
        'organization': 'Snorkel AI',
        'modelName': 'Snorkel Mistral PairRM DPO (7B)',
        'modelString': 'snorkelai/Snorkel-Mistral-PairRM-DPO',
        'contextLength': 32768,
    },
    {
        'organization': 'Stanford',
        'modelName': 'Alpaca (7B)',
        'modelString': 'togethercomputer/alpaca-7b',
        'contextLength': 2048,
    },
    {
        'organization': 'Teknium',
        'modelName': 'OpenHermes-2-Mistral (7B)',
        'modelString': 'teknium/OpenHermes-2-Mistral-7B',
        'contextLength': 8192,
    },
    {
        'organization': 'Teknium',
        'modelName': 'OpenHermes-2.5-Mistral (7B)',
        'modelString': 'teknium/OpenHermes-2p5-Mistral-7B',
        'contextLength': 8192,
    },
    {
        'organization': 'Together',
        'modelName': 'LLaMA-2-7B-32K-Instruct (7B)',
        'modelString': 'togethercomputer/Llama-2-7B-32K-Instruct',
        'contextLength': 32768,
    },
    {
        'organization': 'Together',
        'modelName': 'StripedHyena Nous (7B)',
        'modelString': 'togethercomputer/StripedHyena-Nous-7B',
        'contextLength': 32768,
    },
    {
        'organization': 'Undi95',
        'modelName': 'ReMM SLERP L2 (13B)',
        'modelString': 'Undi95/ReMM-SLERP-L2-13B',
        'contextLength': 4096,
    },
    {
        'organization': 'Undi95',
        'modelName': 'Toppy M (7B)',
        'modelString': 'Undi95/Toppy-M-7B',
        'contextLength': 4096,
    },
    {
        'organization': 'WizardLM',
        'modelName': 'WizardLM v1.2 (13B)',
        'modelString': 'WizardLM/WizardLM-13B-V1.2',
        'contextLength': 4096,
    },
    {
        'organization': 'upstage',
        'modelName': 'Upstage SOLAR Instruct v1 (11B)',
        'modelString': 'upstage/SOLAR-10.7B-Instruct-v1.0',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'Llama 3 8B Instruct',
        'modelString': 'meta-llama/Llama-3-8b-chat-hf',
        'contextLength': 8000,
    },
    {
        'organization': 'Meta',
        'modelName': 'Llama 3 70B Instruct',
        'modelString': 'meta-llama/Llama-3-70b-chat-hf',
        'contextLength': 8000,
    },
];

export const codeModelNames: ModelName[] = [
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Python (70B)',
        'modelString': 'codellama/CodeLlama-70b-Python-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Python (34B)',
        'modelString': 'codellama/CodeLlama-34b-Python-hf',
        'contextLength': 16384,
    },
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Python (13B)',
        'modelString': 'codellama/CodeLlama-13b-Python-hf',
        'contextLength': 16384,
    },
    {
        'organization': 'Meta',
        'modelName': 'Code Llama Python (7B)',
        'modelString': 'codellama/CodeLlama-7b-Python-hf',
        'contextLength': 16384,
    },
    {
        'organization': 'Phind',
        'modelName': 'Phind Code LLaMA v2 (34B)',
        'modelString': 'Phind/Phind-CodeLlama-34B-v2',
        'contextLength': 16384,
    },
    {
        'organization': 'WizardLM',
        'modelName': 'WizardCoder Python v1.0 (34B)',
        'modelString': 'WizardLM/WizardCoder-Python-34B-V1.0',
        'contextLength': 8192,
    }
];

export const languageModelNames: ModelName[] = [
    {
        'organization': '01.AI',
        'modelName': '01-ai Yi Base (34B)',
        'modelString': 'zero-one-ai/Yi-34B',
        'contextLength': 4096,
    },
    {
        'organization': '01.AI',
        'modelName': '01-ai Yi Base (6B)',
        'modelString': 'zero-one-ai/Yi-6B',
        'contextLength': 4096,
    },
    {
        'organization': 'Google',
        'modelName': 'Gemma (2B)',
        'modelString': 'google/gemma-2b',
        'contextLength': 8192,
    },
    {
        'organization': 'Google',
        'modelName': 'Gemma (7B)',
        'modelString': 'google/gemma-7b',
        'contextLength': 8192,
    },
    {
        'organization': 'Meta',
        'modelName': 'LLaMA-2 (70B)',
        'modelString': 'meta-llama/Llama-2-70b-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'LLaMA-2 (13B)',
        'modelString': 'meta-llama/Llama-2-13b-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'Meta',
        'modelName': 'LLaMA-2 (7B)',
        'modelString': 'meta-llama/Llama-2-7b-hf',
        'contextLength': 4096,
    },
    {
        'organization': 'Microsoft',
        'modelName': 'Microsoft Phi-2',
        'modelString': 'microsoft/phi-2',
        'contextLength': 2048,
    },
    {
        'organization': 'Nexusflow',
        'modelName': 'NexusRaven (13B)',
        'modelString': 'Nexusflow/NexusRaven-V2-13B',
        'contextLength': 16384,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 (0.5B)',
        'modelString': 'Qwen/Qwen1.5-0.5B',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 (1.8B)',
        'modelString': 'Qwen/Qwen1.5-1.8B',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 (4B)',
        'modelString': 'Qwen/Qwen1.5-4B',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 (7B)',
        'modelString': 'Qwen/Qwen1.5-7B',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 (14B)',
        'modelString': 'Qwen/Qwen1.5-14B',
        'contextLength': 32768,
    },
    {
        'organization': 'Qwen',
        'modelName': 'Qwen 1.5 (72B)',
        'modelString': 'Qwen/Qwen1.5-72B',
        'contextLength': 4096,
    },
    {
        'organization': 'Together',
        'modelName': 'LLaMA-2-32K (7B)',
        'modelString': 'togethercomputer/LLaMA-2-7B-32K',
        'contextLength': 32768,
    },
    {
        'organization': 'Together',
        'modelName': 'StripedHyena Hessian (7B)',
        'modelString': 'togethercomputer/StripedHyena-Hessian-7B',
        'contextLength': 32768,
    },
    {
        'organization': 'mistralai',
        'modelName': 'Mistral (7B)',
        'modelString': 'mistralai/Mistral-7B-v0.1',
        'contextLength': 8192,
    },
    {
        'organization': 'mistralai',
        'modelName': 'Mixtral-8x7B (46.7B)',
        'modelString': 'mistralai/Mixtral-8x7B-v0.1',
        'contextLength': 32768,
    },
    {
        'organization': 'Meta',
        'modelName': 'Llama 3 8B',
        'modelString': 'meta-llama/Llama-3-8b-hf',
        'contextLength': 8000,
    },
    {
        'organization': 'Meta',
        'modelName': 'Llama 3 70B',
        'modelString': 'meta-llama/Meta-Llama-3-70B',
        'contextLength': 8000,
    },
    {
        'organization': 'Meta',
        'modelName': 'LlamaGuard 2 8B',
        'modelString': 'meta-llama/LlamaGuard-2-8b',
        'contextLength': 4096,
    },
    {
        'organization': 'mistralai',
        'modelName': 'Mixtral-8x22',
        'modelString': 'mistralai/Mixtral-8x22B',
        'contextLength': 65536,
    },
    {
        'organization': 'databricks',
        'modelName': 'DBRX Instruct',
        'modelString': 'databricks/dbrx-instruct',
        'contextLength': 32768,
    },
];

export const imageModelNames: ModelName[] = [
    {
        'organization': 'Prompt Hero',
        'modelName': 'Openjourney v4',
        'modelString': 'prompthero/openjourney'
    },
    {
        'organization': 'Runway ML',
        'modelName': 'Stable Diffusion 1.5',
        'modelString': 'runwayml/stable-diffusion-v1-5'
    },
    {
        'organization': 'SG161222',
        'modelName': 'Realistic Vision 3.0',
        'modelString': 'SG161222/Realistic_Vision_V3.0_VAE'
    },
    {
        'organization': 'Stability AI',
        'modelName': 'Stable Diffusion 2.1',
        'modelString': 'stabilityai/stable-diffusion-2-1'
    },
    {
        'organization': 'Stability AI',
        'modelName': 'Stable Diffusion XL 1.0',
        'modelString': 'stabilityai/stable-diffusion-xl-base-1.0'
    },
    {
        'organization': 'Wavymulder',
        'modelName': 'Analog Diffusion',
        'modelString': 'wavymulder/Analog-Diffusion'
    }
];