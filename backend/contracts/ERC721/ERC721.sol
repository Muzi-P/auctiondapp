pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Basic.sol";


contract ERC721Enumerable is ERC721Basic {
  function totalSupply() public view returns (uint256);
  function tokenOfOwnerByIndex(address _owner, uint256 _index) public view returns (uint256 _tokenId);
  function tokenByIndex(uint256 _index) public view returns (uint256);
}

contract ERC721Metadata is ERC721Basic {
  function name() public view returns (string memory _name);
  function symbol() public view returns (string memory _symbol);
  function tokenURI(uint256 _tokenId) public view returns (string memory);
}

contract ERC721 is ERC721Basic, ERC721Enumerable, ERC721Metadata {
}
