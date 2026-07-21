let provider;
let signer;
let userAddress;

const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletAddressSpan = document.getElementById('walletAddress');
const stakeBtn = document.getElementById('stakeBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

connectWalletBtn.addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();

            // Update UI
            walletAddressSpan.innerText = userAddress.substring(0, 6) + "..." + userAddress.substring(userAddress.length - 4);
            connectWalletBtn.innerText = "Connected";
            connectWalletBtn.style.backgroundColor = "#22c55e";
            
            // Enable buttons
            stakeBtn.removeAttribute('disabled');
            withdrawBtn.removeAttribute('disabled');

        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        alert("Please install MetaMask or another Web3 wallet!");
    }
});

stakeBtn.addEventListener('click', () => {
    const amount = document.getElementById('stakeAmount').value;
    if(!amount || amount <= 0) {
        alert("Please enter a valid amount to stake!");
        return;
    }
    alert(`Staking ${amount} tokens... (Smart Contract integration required)`);
});

withdrawBtn.addEventListener('click', () => {
    alert("Withdrawing tokens... (Smart Contract integration required)");
});
