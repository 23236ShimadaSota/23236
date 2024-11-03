import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';

export const gopg = (url: string) => {
    const $page = get(page);
    if ($page.url.origin + url != $page.url.href) {
        goto(url);
    }
};