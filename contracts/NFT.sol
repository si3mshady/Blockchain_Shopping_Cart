// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;



import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract NFT is ERC721 {
    uint public tokens_created = 0;
    address buyer;

    constructor(string memory winename) ERC721("Metaverse", "METT") {
        buyer = msg.sender;
        createToken(winename);
    }

    function createToken  (string memory wineName)  public returns (uint256 ) {

        uint256 newItemId = tokens_created += 1;

        _mint(msg.sender, newItemId);

        return newItemId;
    }
}
