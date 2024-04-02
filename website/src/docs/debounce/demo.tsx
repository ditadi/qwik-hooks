import { $, component$, useSignal } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { useDebounce } from "@ditadi/qwik-hooks";
import { LuLoader } from "@qwikest/icons/lucide";
import { Button } from "~/components/ui/button/button";
import { Input } from "~/components/ui/input/input";

type Movie = { Title: string; Year: string };

const fetchMovies = server$(async (searchInput: string) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=6db4cdc3&s=${searchInput}`);
    const movies = await res.json();
    return movies as { Search: Movie[] };
});

export default component$(() => {
    const inputValue = useSignal("");
    const moviesList = useSignal<{ Search: Movie[] }>({ Search: [] });

    const handlerFetchMovies = $(async () => {
        const movies = await fetchMovies(inputValue.value);
        moviesList.value = movies;
    });

    const { debouncedSignal, isDebouncing } = useDebounce(inputValue, 1000, handlerFetchMovies);

    return (
        <div class="flex flex-col bg-background w-full items-center p-10 gap-5">
            <span class="text-white">List of Movies</span>
            <Input placeholder="Search Movies" class="bg-white" bind:value={inputValue} />
            <Button
                look="secondary"
                size="sm"
                class="font-sans rounded-[10px] h-6 md:h-10 lg:h-10"
                onClick$={() => fetchMovies(debouncedSignal.value)}
            >
                {isDebouncing.value ? (
                    <>
                        <LuLoader class="animate-spin" />
                        Searching...
                    </>
                ) : (
                    <>Search</>
                )}
            </Button>
            <div class="flex flex-col gap-3 h-40  overflow-auto w-full">
                {(moviesList.value?.Search?.length === 0 || !moviesList.value.Search) && (
                    <div class="text-white">No movies found</div>
                )}
                {moviesList.value?.Search?.map((movie) => (
                    <div class="flex gap-1 items-center">
                        <span class="text-white font-bold">{movie.Title as string}</span>
                        <span class="text-white text-sm">{movie.Year as string}</span>
                    </div>
                ))}
            </div>
        </div>
    );
});
