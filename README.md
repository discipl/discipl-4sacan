# discipl-4sacan

4sacan stands for: For Smart Access Control Attending to Needs
*S*ecure *S*mart access control for *S*elf *S*overeign people in processes that attend to needs

~ forsaken: leaving the old centralised access control world

Used in tandem with discipl-abundance-service

the API for now contains:

allow(ssid, dids)

Denotes that only given did's are acted upon. It depends on the discipl platform how this is enforced.
It simply denotes this through a (revokeable) verifiable claim.

require(ssid, predicate, dids)

Denotes that only did's are acted upon that communicated a certain proof in the form of an attestation issued by given did's
using the given predicate. It simply denotes this through a (revokeable) verifiable claim.

