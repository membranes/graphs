import data from '$lib/data/project/frames.json';

export function load() {
    return {
        frames: data.map((datum) => ({
            title: datum.title,
            desc: datum.desc
        }))
    };
}