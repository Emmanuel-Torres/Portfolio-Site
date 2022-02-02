import { ChangeEvent, ChangeEventHandler, FC, FormEvent, useState } from 'react';
import ClientConfig from '../../models/clientConfig';

type Props = {
    onSubmit: (config: ClientConfig) => void;
}

const WireguardForm: FC<Props> = (props): JSX.Element => {
    const [name, setName] = useState<string>("");
    const [ipAddress, setIpAddress] = useState<string>("");
    const [allowedIpRange, setAllowedIpRange] = useState<string>("");
    const [publicKey, setPublicKey] = useState<string>("");
    const [privateKey, setPrivateKey] = useState<string>("");

    const isFormValid = (
        name.trim().length > 0 &&
        ipAddress.trim().length > 0 &&
        allowedIpRange.trim().length > 0 &&
        publicKey.trim().length > 0 &&
        privateKey.trim().length > 0
    );

    const nameChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const ipAddressChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIpAddress(event.target.value);
    }

    const ipRangeChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAllowedIpRange(event.target.value);
    }

    const publicKeyChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPublicKey(event.target.value);
    }

    const privateKeyChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPrivateKey(event.target.value);
    }

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        if (isFormValid) {
            const config: ClientConfig = {
                name,
                ipAddress,
                dateAdded: new Date(),
                allowedIpRange,
                publicKey,
                privateKey
            }

            props.onSubmit(config);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Client Name</label>
            <input type="text" onChange={nameChangedHandler}/>
            <label>IP Address</label>
            <input type="text" onChange={ipAddressChangedHandler} />
            <label>Allowed IP Range</label>
            <input type="text" onChange={ipRangeChangedHandler} />
            <label>Client public key</label>
            <input type="text" onChange={publicKeyChangedHandler} />
            <label>Client private key</label>
            <input type="text" onChange={privateKeyChangedHandler} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default WireguardForm;