export const embedTweeker = (args) => {
  if (!args.businessId) {
    throw new Error('Expected businessId as key in arguments')
  }
  setOptions(args.businessId)
  injectScript(args.embedVersion)
}

const setOptions = (businessId) => {
  return window.TweekerSettings = {
    businessId: businessId
  }
}

const injectScript = (embedVersion = 'latest') => {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://embed.tweeker.io/${embedVersion}.js`

  const headOrBody = document.head || document.body

  if (!headOrBody) {
    throw new Error(
      'Expected document.body not to be null. tweeker embed.js requires a <body> element.'
    );
  }

  headOrBody.appendChild(script);

  return script
}